import { useEffect, useState } from "react"
import { apiMirage } from "../services/api"

interface Version {
    id: number;
    version: string;
    description: string;
}

const VersionsList = () => {
    const [versionsList, setVersionsList] = useState<Version[]>([])
    const [version, setVersion] = useState("")
    const [description, setDescription] = useState("")

    function getVersions() {
        apiMirage.get('versions')
                .then(({ data }) => {
                    setVersionsList(data.versions);
                })
    }

    useEffect(() => {
        getVersions();
    }, [])

    function handleSubmit(e: React.SyntheticEvent) {
        apiMirage.post('versions',{
            version: {
                version,
                description
            }
        }).then(()=>{
            getVersions();
        })

        e.preventDefault()
    }

    return (
        <div>
            <div>
                <h4>Create Version</h4>
                <form onSubmit={handleSubmit}>
                    <label> Version:
                        <input type="text" name="version" value={version} onChange={(e) => { setVersion(e.target.value) }} />
                    </label>
                    <label> Description:
                        <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div>
                {
                    versionsList.map((version) => {
                        return (
                            <p key={version.id}>{version.description}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VersionsList