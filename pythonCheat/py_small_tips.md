# Python Small Tips
There are so many good and easy places in Python. I list some of them. Hope it may help you.

#### Tip1. Alternate two variables in place

`x, y = y, x`
####Tip2. Compare Operators can be combined
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
####Tip9. Debug Script
use module <i>pdb</i> to debug script. For details, please see the <a href="https://docs.python.org/2/library/pdb.html">document</a>