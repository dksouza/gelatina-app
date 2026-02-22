import subprocess
import time

filepath = "file:///Users/dymmer/Desktop/DIGITAL/GELATINA/app/index.html"

# Open in Safari
subprocess.run(['open', '-a', 'Safari', filepath])
time.sleep(2)

# Get the script error if any
applescript = f"""
tell application "Safari"
    set doc_url to URL of document 1
    if doc_url contains "index.html" then
        return do JavaScript "window.myErr" in document 1
    end if
end tell
"""
# I can inject a script to catch errors before loading, but since I can't modify index.html easily just for testing...
