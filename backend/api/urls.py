from django.urls import path
from .views.local_views import LocalListView, LocalDetailView



app_name = 'api'

urlpatterns = [
    # paths relacionados a local
    path("locais/", LocalListView.as_view()),
    path("locais/<int:pk>/", LocalDetailView.as_view()),
]