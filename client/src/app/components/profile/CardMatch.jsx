export default function CardMatch({ match }) {
    const { name, image } = match;

    return (
        <a href="#" className="bg-white rounded-lg shadow-md w-64">
            <div className="overflow-hidden w-full h-64 rounded-t-lg relative z-1">
                <img className="object-cover w-full h-full blur-sm" src={image} alt={`Imagen de ${name}`} />
            </div>
            <p className="font-semibold text-lg p-4 relative z-30">{name}</p>
        </a>
    );
}