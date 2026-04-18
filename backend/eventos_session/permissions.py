from rest_framework.permissions import BasePermission

from eventos_session.services.token_service import TokenService, TokenValidationError


class HasValidSessionToken(BasePermission):
    """Permite acesso apenas quando houver token válido (cookie HttpOnly ou Bearer) da sessão customizada."""

    message = "Token de acesso inválido ou ausente"

    def has_permission(self, request, view):
        # Tentar ler access_token do cookie primeiro 
        token = request.COOKIES.get("access_token")

        # [TEMP-FALLBACK] Fallback para Bearer header durante migração
        if not token:
            auth_header = request.META.get("HTTP_AUTHORIZATION", "")
            if auth_header.startswith("Bearer "):
                token = auth_header.split(" ", 1)[1]

        if not token:
            return False

        try:
            request.session_payload = TokenService.decode_token(token)
            return True
        except (ValueError, KeyError, TypeError, TokenValidationError):
            return False
