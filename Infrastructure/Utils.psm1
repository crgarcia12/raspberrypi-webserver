function Use-LemonTreeDockerRegistry
{
    [CmdletBinding]
    param(
        [string] $RegistryPassword
    )

    docker login -u crgarlemontreeregistry -p $RegistryPassword crgarlemontreeregistry.azurecr.io
}