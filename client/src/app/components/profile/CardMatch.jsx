import { useUser } from "@/app/providers/UserProvider";

export default function CardMatch({ match }) {
    const { name, lastname, image, user_id} = match;

    const {user } = useUser();

    return (
        <a href={`/mi-cuenta/${user.id}/match/${user_id}`} className="bg-white rounded-lg shadow-md w-64">
            <div className="overflow-hidden w-full h-64 rounded-t-lg relative z-1">
                <img className="object-cover w-full h-full blur-sm" src={`http://127.0.0.1:8000/storage/${image}`}  alt={`${name} ${lastname} photo`} />
            </div>
            <p className="font-semibold text-lg p-4 relative z-30">{`${name} ${lastname}`}</p>
        </a>
    );
}
