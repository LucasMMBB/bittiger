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
- `adb shell cat /system/build.prop`
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

#### Check installed packages list
list all: `adb shell pm list packages`
list system packages: `adb shell pm list packages -s`
list third-party packages: `adb shell pm list packages -3`

Use `grep` to filter packages
```
adb shell
pm list packages | grep pattern
```

## Check Device Information
#### Device Model
```sh
adb shell dumpsys battery
```
#### Screen Resolution
```sh
adb shell wm size
```
#### Screen Density
```sh
adb shell wm density
```

#### IMEI
```sh
adb shell dumpsys iphonesubinfo
```
Find the Device ID and it is IMEI

#### Android Version
```sh
adb shell getprop ro.build.version.release
```

#### Find IP
You can use `adb shell netcfg`

#### Check your CPU
```sh
adb shell cat /proc/cpuinfo
```
#### Memory info
```sh
adb shell cat /proc/meminfo
```
#### More info about system and information
```sh
adb shell cat /system/build.prop
```
Here are some common info.

| Attributes                      | Description                  |
|---------------------------------|------------------------------|
| ro.build.version.sdk            | SDK version                  |
| ro.build.version.release        | Android version              |
| ro.build.version.security_patch | Android security version     |
| ro.product.model                | Model                        |
| ro.product.brand                | Brand                        |
| ro.product.name                 | Name                         |

## keep updating more commands. 

