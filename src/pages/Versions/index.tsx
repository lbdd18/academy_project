import { useEffect, useState } from "react"
import MuiButton from "../../components/MuiButton";
import MuiDataGrid from "../../components/MuiDataGrid";
import MuiTextField from "../../components/MuiTextField";
import { apiMirage } from "../../services/api"

import { Content, FormContent, Title } from "./styles"

interface Version {
    id: number;
    version: string;
    description: string;
}

const columns = [
    {
        field: 'version',
        headerName: 'Version',
        flex: 1
    },
    {
        field: 'description',
        headerName: 'Description',
        flex: 1,
    }
];


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
        apiMirage.post('versions', {
            version: {
                version,
                description
            }
        }).then(() => {
            getVersions();
        })

        e.preventDefault()
    }

    return (
        <>
            <Title variant='h5'>Versions</Title>
            <Content>
                <form onSubmit={handleSubmit}>
                    <FormContent>
                        <MuiTextField label="version" value={version} onChange={(e) => { setVersion(e.target.value) }} />
                        <MuiTextField label="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        <MuiButton variant="contained" type="submit">Add</MuiButton>
                    </FormContent>
                </form>
                <MuiDataGrid columns={columns} rows={versionsList} />
            </Content>
        </>
    )
}

export default VersionsList