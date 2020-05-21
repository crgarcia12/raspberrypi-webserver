function Use-LemonTreeDockerRegistry
{
    [CmdletBinding]
    param(
        [string] $RegistryPassword
    )

    docker login -u crgarlemontreeregistry.azurecr.io -p $RegistryPassword
}