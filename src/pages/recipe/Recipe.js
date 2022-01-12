import './Recipe.css'
import {useParams} from "react-router-dom"
import {useTheme} from "../../hooks/useTheme";
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";

export default function Recipe() {
    const {id} = useParams();
    const {mode} = useTheme();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false);
                setData(doc.data());
            } else {
                setIsPending(false);
                setError('Could not find page');
            }
        })
        return () => unsub()
    }, [id]);


    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && (
                <>
                    <h2 className={`page-title ${mode}`}>{data.title}</h2>
                    <p className="time">Cooking time about {data.cookingTime}</p>
                    <ul>
                        {data.ingredients.map((ingredient) =>
                            <li key="ingredient">{ingredient}</li>
                        )}
                    </ul>
                    <p className="method">{data.method}</p>
                </>

            )}
        </div>
    )
}