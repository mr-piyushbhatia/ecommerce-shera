import winrm

def execute_powershell_script(ps_script, server, username, password):
    session = winrm.Session(
        server, 
        auth=(username, password),
        server_cert_validation='ignore'  # Ignore certificate validation for simplicity
    )
    encoded_ps = ps_script.encode('utf-8')
    result = session.run_ps(encoded_ps)
    return result.status_code, result.std_out, result.std_err

def deploy_web_application(site_name, physical_path):
    # Define the PowerShell script to create a new website in IIS
    ps_script = f"""
        Import-Module WebAdministration
        New-WebSite -Name '{site_name}' -PhysicalPath '{physical_path}' -Port 8080 -Force
    """

    # Replace 'localhost' with the actual server name or IP address
    server = 'http://ec2-52-66-136-117.ap-south-1.compute.amazonaws.com'
    username = 'administrator'
    password = 'p2$At0l?M(x1VbP-xx@(vQVmriVgbAli'

    # Execute the PowerShell script
    status_code, std_out, std_err = execute_powershell_script(ps_script, server, username, password)

    if status_code == 0:
        print(f"Web application '{site_name}' deployed successfully.")
    else:
        print(f"Error deploying web application '{site_name}': {std_err.decode('utf-8')}")


site_name = 'YourWebApp'
physical_path = './build'

deploy_web_application(site_name, physical_path)