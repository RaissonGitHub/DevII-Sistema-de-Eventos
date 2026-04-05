export default function Tag({ corFundo, corTexto, texto }) {
    const classes =
        'd-inline-flex align-items-center justify-content-center gap-2 rounded-3 px-3 py-2';
    const textClasses = 'fw-bold fs-6 text-break';

    const estiloFundo = corFundo ? { background: corFundo } : undefined;
    const estiloTexto = corTexto ? { color: corTexto } : undefined;

    return (
        <div className={classes} style={estiloFundo}>
            <div className={textClasses} style={estiloTexto}>
                {texto}
            </div>
        </div>
    );
}
