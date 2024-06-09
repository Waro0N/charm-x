Write-Host "Creating Python virtual environment"
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    # fallback to python3 if python not found
    $pythonCmd = Get-Command python3 -ErrorAction SilentlyContinue
}

# Check if the Python command was found
if (-not $pythonCmd) {
    Write-Host "Python or Python3 not found. Please install Python."
    exit 1
}

# Create the virtual environment in the backend directory
Start-Process -FilePath ($pythonCmd).Source -ArgumentList "-m venv ./backend/app/backend_env" -Wait -NoNewWindow
Write-Host ""
Write-Host "Restoring backend Python packages"
Write-Host ""

# Set the location to the backend directory
Set-Location -Path "./backend"

$venvPythonPath = "./app/backend_env/Scripts/python.exe"
if (-not (Test-Path -Path $venvPythonPath)) {
    # fallback to Linux venv path
    $venvPythonPath = "./app/backend_env/bin/python"
}

# Check if the virtual environment Python executable exists
if (-not (Test-Path -Path $venvPythonPath)) {
    Write-Host "Virtual environment Python executable not found."
    exit 1
}
pip freeze > ./app/requirements.txt
# Install required Python packages
Start-Process -FilePath $venvPythonPath -ArgumentList "-m pip install -r ./app/requirements.txt" -Wait -NoNewWindow
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to restore backend Python packages"
    exit $LASTEXITCODE
}

Write-Host "Backend setup completed successfully"

Write-Host ""
Write-Host "Restroing Frontend Pakages"
Write-Host ""

Set-Location ../frontend/app
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to restore frontend npm packages"
    exit $LASTEXITCODE
}


Write-Host ""
Write-Host "Building frontend"
Write-Host ""

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to build frontend"
    exit $LASTEXITCODE
}


Write-Host ""
Write-Host "Starting backend"
Write-Host ""

Set-Location ../../backend/app
Start-Process http://127.0.0.1:8000

python manage.py runserver

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to start backend"
    exit $LASTEXITCODE
}

