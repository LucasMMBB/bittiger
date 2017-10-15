# Python Small Tips
There are so many good and easy places in Python. I list some of them. Hope it may help you.

#### Tip1. Alternate two variables in place

`x, y = y, x`
#### Tip2. Compare Operators can be combined
```ython
x = 10
print 1 < x < 20
# true
```
#### Tip3. One line value assignment
`x = "x" if True else "y"`


#### Tip4. Multi-line string
```python
multiStr = ("This is xxx from"
" umich"
" Hello there")
```
#### Tip5. assign multi vars by list
```python
x, y, z = [1,2,3]
print (x, y, z) # (1,2,3)
```
#### Tip6.  Print the root paths of modules imported
```python
import os
import socket

print os
print socket

#<module 'os' from '/usr/lib/python2.7/os.pyc'>
#<module 'socket' from '/usr/lib/python2.7/socket.pyc'>
```
#### Tip7. Single underscore variable in python
In python command line, the result will be assigned to a temporary variable "_".
```python
>>> 2 + 5
7
>>> print _
7
```
#### Tip8.  Dict/Set
```python
dic = {i:i**2 for i in range(5)}
set = {i**2 for i in range(5)}
print dic
print set

#{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
#set([0, 1, 4, 16, 9])
```
#### Tip9. Debug Script
use module <i>pdb</i> to debug script. For details, please see the <a href="https://docs.python.org/2/library/pdb.html">document</a>
#### Tip10. Check the attributes
```python
str = "Maoxu Liu"
print dir(str)

'__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getslice__', '__gt__', '__hash__', '__init__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_formatter_field_name_split', '_formatter_parser', 'capitalize', 'center', 'count', 'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'index', 'isalnum', 'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
#### Tip11. simpify if
`if m in [1, 2, 3]`
instead of
`if m == 1 or m == 2 or m == 3`
#### Tip12. Combine elements in list
```python
str = ["This ","is ","Maoxu Liu"]
print "".join(str)
```
#### Tip13. Return multiple values in methods
```python
def method():
	return "a", "b", "c", "d"

print method
```
#### Tip14. Use dict to store lambda
```python
stdcalc = {
	'sum': lambda x, y: x + y,
	'subtract': lambda x, y: x - y
}

print stdcalc['sum'](9, 3) # 12
print stdcalc['subtract'](9, 3) # 6
```
#### Tip15. Check memory
In python 2.7, a 32-bit integer takes 24 bytes and 28 types in Python 3.5. To determin the memory usage, we can call the getsizeof method:
In Python 2.7
```python
from sys import *
x = 1
print getsizeof(x)
# 24
```
In Python 3.5
```
from sys import *
x = 1
print (getsizeof(x))
# 28
```
## Conclusion
I will keep updating tips for python.
Hope it will help
## About me
Maoxu Liu - Software engineer
Check me on:
- website: http://welcometolucs.com
- github: https://www.github.com/LucasMMBB
- linkedin: https://www.linkedin.com/in/maoxu-liu-2bb949a6/
