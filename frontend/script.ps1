Import—Module WebAdministration

$iisWebsiteName="TestSite"
$physicalPath="C:\test\wwwroot"
$websiteUrl=""

# See if a WebAppPool with this name already exists
if (Test-Path IIS:\AppPools\$iisWebsiteName) {
    Remove—WebAppPool —Name $iisWebsiteName
}
# Create a new WebAppPool
New-WebAppPool —Name $iisWebsiteName

# See if a Website with this name already exists
if (Get-Website —Name $iisWebsiteName){
    Remove—Website —Name $iisWebsiteName
}
# Create a new Website
New-WebSite -Name $iisWebsiteName -Port 80 —IPAddress * —HostHeader $websiteUrl —PhysicalPath $physicalPath -ApplicationPool $iisWebsiteName
Set-ItemProperty "IIS:\Sites\$iisWebsiteName" —Name Bindings -value @{protocol="http"; bindinglnformation="*:80:$websiteUrl"}