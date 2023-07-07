const Information = (
        {nom, 
        prenom,
        age,
        photo,
        adresse,
        tel ,
        permis,
        siteweb}
    ) => {
    return (
        <>
            <div style={{border: "1px solid red"}}>
                <h1>Bonjour {`${nom} ${prenom}`}</h1>
                <p>Âge : {age}</p>
                <img src={photo} alt={nom} style={{width: "20px"}}/>
                <p>Adresse : {adresse}</p>
                <p>Téléphone : +33{tel}</p>
                <p>Permis de conduire : {permis}</p>
                <a
                    href={siteweb}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Mon site Web
                </a>
            </div>
        </>
    );
}
 
export default Information;

// Informations : - Nom - Prenom - Age - Photo - Adresse - Tel - Permis
// Compétences - Nom de la coméptences - Niveau de la compétences
// Formation - Nom de l'école - Période (exemple de 2022 à 2023) -
// Diplôme/Certification lié à la formation Hobbie - Nom - Nombre
// d'année de pratique 
// Diplômes - Nom - Date d'obtention
