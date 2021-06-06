export const TiposBasicos = () => {

    // Basics variables
    let name: string | number = 'Bryan';
    name = 123;
    const age: number = 35;
    const isActive: boolean = true;

    // Arrays
    const powers: string[] = ['Flight', 'Speed', 'Strong', 'Ray'];
    const animes: string[] = [];
    const numbers: number[] = [];

    return (
        <>
            <h3>Tipos Basicos Typesscript</h3>
            <p>{ name }, { age }, { isActive ? 'Activo' : 'Inactivo' }</p>
            <p>
                {
                    powers.join(', ')
                }
            </p>
            <p>{ animes }</p>
            <p>{ numbers }</p>
        </>
    )
}
