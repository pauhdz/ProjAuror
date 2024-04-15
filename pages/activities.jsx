// Dentro de pages/activities.js

export async function getServerSideProps() {
    // Intenta obtener datos de tu API
    const res = await fetch('http://localhost:3000/api/activities');
    
    // Registra la respuesta para depuración. Se recomienda eliminar esto en producción.
    const textResponse = await res.text(); // Registra temporalmente la respuesta en texto
    console.log(textResponse);
    
    // Intenta analizar la respuesta en texto como JSON
    let activities = [];
    try {
        activities = JSON.parse(textResponse);
    } catch (error) {
        console.error('Error al analizar las actividades como JSON:', error);
        // Maneja el error de manera adecuada según el contexto de tu aplicación
    }
    
    // Pasa los datos de las actividades a la página a través de props
    return {
        props: { activities },
    };
}

function ActivitiesPage({ activities }) {
    return (
        <div>
            <h1>Actividades</h1>
            <ul>
                {activities.map((activity) => (
                    // Asegúrate de que activity_id es único para cada actividad
                    <li key={activity.activity_id}>{activity.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ActivitiesPage;
