## ADB commonds - Android Development
ADB is really usefully for android developers. In this article, I want to share some thoughts on it.

#### What is ADB
ADB: Android Debug Bridge, is used for debug and test during development. Basicly, ADB is a command-line utility included in Android SDK. ADB can control your device over USB from a PC, copy files back and forth, install and uninstall apps, run shell commands, and more.
***You can do a lot with ADB***

#### Manager your ADB
- Kill ADB server process: `adb kill-server`
- Start or restart Server process: `adb start-server`
- Restart adb service by using root: `adb root`

#### Setting management
- `adb devices` check devices connected to your pc
- `adb get-serialno` get serial number of your device, only available when only one device connected.
- `adb reboot` restart the device
- `adb reboot bootloader/recovery` Restart device into `fastboot` mode or recovery mode.

#### Get your device information
- `adb shell cat /sys/class/net/wlan0/address` retrieve wifi address
- `adb shell cat /proc/cpuinfo` get cpu serial number
- `adb shell cat /system/buuild.prop`
- `adb shell cat /data/misc/wifi/*.conf` see wifi configuration attributes

#### Manage applications on your device
- `adb install [-r | -s] <apk file>` install apk file
- `adb uninstall [-r | -s] <packagename>` uninstall app
- `adb shell top` check memory
- `adb shell ps` check process
- `adb kill <pid>` kill process with that pid
- `adb shell service list` check what's going on the backedn
- `adb shell cat /proc/meminfo` check memory infor
- `adb shell cat /proc/iomen` check io partition information

#### File commands
- `adb shell ls mnt` check device names on all the devices
- `adb remount`
- `adb push <local> <remote>` copy your file from local directory to remote device
- `adb pull <remote> <local>` pull file from remote device
- `adb shell ls` list all files and directories
- `adb shell mkdir path/<folder name>` create new directory under that path

#### Other commands
- `adb shell input text <content>` send file content
- `adb shell input keyevent <keycode>` send keyboard events through adb
- `adb shell wm size` check device resolution
- `adb shell getprop <key>` get device information
- `adb setprop <key> <value>`set params in device
- `adb shell screencap -p <path/file>`  screenshot

I will keep adding more commands.
