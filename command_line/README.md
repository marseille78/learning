# Работа в командной строке Unix / Unix Command Line

* [Базовые команды]()
* [Работа с файлами и путями]()
* [Pipes]()
* [Редиректы]()
* [Права]()

## Базовые команды

* `[cmd] --help | [cmd] -h` - Команда для получения помощи о команде `(cmd)` `(Bash)`

```
git --help
git help
git -h
```

* `man [cmd]` - Команда выводящая мануал на команду `(cmd)`
* `whoami` - Команда выводящая в консоль имя пользователя `(Bash)`
* `w` - Показывает текущее состояние системы
* `uname` - Команда. Показывает название OC `Bash`
  * `uname -a` - Команда. Показывает полную информацию по машине. Ее адрес, какое у нее ядро, дату и т.д. `Bash`
* `alias [name]="[cmd]"` - Команда. Создает `alias` с именем `(name)`, который выполняет команду `(cmd)`

```
alias l="ls -lAhG"
```

## Работа с файлами и путями

* `pwd` - Команда. Выводит путь к текущей директории `(Bash)`
* `cd [path]` - Команда. Перемещает пользователя в папку с путем `(path)` `(Bash)`
  * `cd -` - Команда. Перемещает пользователя в предыдущую папку, в которой он был. `(Bash)`
  * `cd ../` - Команда. Переход из текущей папки на уровень выше `(Bash)`
  * `cd ~` - Команда. Переход в корневую пользовательскую директорию `(Bash)`
* `ls` - Команда. Выводит содержимое текущей директории в консоль `(Bash)`
  * `ls [path]` - Выводит на экран содержимое директории с путем `(path)` `(Bash)`
  * `ls -l` - Команда. Выводит содержимое текуще директории в виде списка-таблицы в одну колонку с дополнительной информацией о содержимом `(Bash)`
  * `ls -l -h | ls -lh` - Команда. Выводит содержимое текуще директории в виде списка-таблицы в одну колонку с дополнительной информацией о содержимом. Дополнительно размер выводится в удобном формате `(Bash)`
  * `ls -a` - Команда. Выводит дополнительно и системные файлы, т.е. те, которые начинаются с символа `"."`. В начале ставятся `./` и `../` `(Bash)`
  * `ls -A` - Команда. Выводит дополнительно и системные файлы, т.е. те, которые начинаются с символа `"."`. Без `./` и `../` в начале `(Bash)`
  * `ls -g` - Команда. Выводит содержимое текущей директории в виде списка-таблицы с подсветкой папок `(Bash)`
  * `ls -G` - Команда. Выводит содержимое текущей директории в виде многоколоночного списка с подсветкой папок `(Bash)`
* `cat [file]` - Команда. Выводит на экран содержимое файла `(file)` `(Bash)`
* `head [file]` - Команда. Выводит на экран первые 10 строк файла `(file)`
* `tail [file]` - Команда. Выводит на экран последние 10 строк файла `(file)`
  * `tail -n [x] [file]` - Команда. Выводит на экран последние `(x)` строк в файле `(file)`
  * `tail -f [file]` - Команда. Выводит на экран последние 10 строк в файле `(file)` и отслеживает его изменение
* `wc [file]` - Команда. Выводит на экран информацию о файле: Количество строк, слов... `(Bash)`
* `more < [file]` - Выводит на экран содержимое файла `(file)` таким образом, что выводится не больше, чем помещается на экран. При нажатии клаввиши `(Enter)` выводятся следующая часть
* `gzip [file]` - Команда. Архивирует файл `(file)`, создавая архив `(file).gz`. При этом исходный файл исчезает
  * `gzip -d [file]` - Команда. Разархивирует файл `(file)` расширения `gz`. При этом исходный файл исчезает
* `tar [flags] [zip] [dir]` - Команда. Архивирует/разархивирует папку `(dir)` с параметрами, в зависимости от установленных флагов `(flags)` в архив `(zip)`
  * `c` - Флаг Create. Создает архив
  * `z` - Флаг Zipped. Ужимает
  * `v` - Флаг Verbose. Выводит на экран сообщение о проделанной работе
  * `x` - Флаг Extract. Разархивация (вместо флага `c`) Если такая папка уже есть, то ее содержимое будет перезаписано
  * `f` - Флаг Specifiy filename for output

```
tar -cvzf arch-file.zip folder
```

```
tar -xvzf arch-file.tgz folder
```

* `rm [file]` - Удаление одного или нескльких файлов `(file)`
  * `i` - Флаг. Удаление, требующее подтврерждение удаления
  * `r` - Флаг. Удаление папки
  * `f` - Флаг Specifiy filename for output. Удаление несмотря на наличие содержимого

```
rm file1 file2
```

```
rm -i file
```

```
rm -r dir
```

```
rm -rf dir
```

* `cp [file1] [file2]` - Команда. Копирует содержимое файла `(file1)` в файл `(file2)`
  * `cp [file] [dir]` - Команда. Копирует файл `(file)` в директорию `(dir)`
  * `cp [file1] [dir]/[file2]` - Команда. Копирует файл `(file1)` в папку `(dir)` переименовывая его в `(file2)`
* `mv [file] [dir]` - Команда. Перемещает файл `(file)` в папку `(dir)`
  * `mv [file1] [dir]/[file2]` - Команда. Перемещает файл `(file1)` в директорию `(dir)` переименовывая его в `(file2)`
  * `v` - Флаг Verbose. Выводит сообщение на экран о проделанной работе
* `mkdir [dir]` - Команда. Создание новой директории `(dir)`
  * `mkdir -p [dir1]/[dir2]/[dir3]` - Команда. С данным флагом создание иерархической структуры папок `(dir1)`, `(dir2)` и `(dir3)`
* `rmdir [dir]` - Команда. Удаление пустой папки `(dir)`
* `tree [dir]` - Команда. Выводит на экран структуру в папке `(dir)` (только в `Unix`)

## Pipes

*Перенаправляют контент, полученный от первой команды во вторую*

* `[cmd] | more` - Команда-pipe, которая выводит на экран результат команды `(cmd)` столько, сколько помещается на экране. После нажатия `пробела` выводятся следующие и т.д.

```
ls -la | more
```

* `cat [file] | grep [word]` - Команда. Берет файл (file), ищет в нем строки в которых есть слово `(word)` и выводит их на экран `(Bash)`
* `cat [file] | grep [word] | wc` - Команда. Берет файл (file), ищет в нем строки в которых есть слово `(word)` и выводит их количество на экран `(Bash)`

## Редиректы

* `ls [dir] > [file]` - Команда. Записывает содержимое директории `(dir)` в файл `(file)`. Предыдущее содержимое перезаписыввается `(Bash)`
  * `ls [dir] >> [file]` -  - Команда. Записывает содержимое директории `(dir)` в файл `(file)`. Новое содержимое не перезатерает старое, а добавляет сзади `(Bash)`

## Права

`-rwxrwxrwx` - Описание прав на файл
* `1-й rwx` - Возможности текущего пользователя
* `2-й rwx` - Возможности текущей группы пользователей

***

* `r` - возможность читать данный файл
* `w` - возможность править данный файл
* `x` - возможность запускать данный файл

***

* `u` - Пользователь. Админ
* `g` - Группа пользователей
* `o` - Все остальные

***

* `chmod [group]+[flag] [file]` - Команда. Изменение прав доступа к файлу. Добавление группе пользователей `(group)` возможность работать с файлом `(file)` в зависимости от флага `(flag)`
* `chmod [group]-[flag] [file]` - Команда. Изменение прав доступа к файлу. Забирание у группы пользователей `(group)` возможности работать с файлом `(file)` в зависимости от флага `(flag)`
* `chmod [group]=[flag] [file]` - Команда. Установление для группысимо пользователей `(group)` прав доступа к файлу `(file)` в зависимости флага `(flag)` 
* `chmod -R [group]+[flag] [dir]` - Команда. Изменение прав доступа к папке `(dir)` и рекурсивно ко всему содержимому внутри нее. Добавление для группы пользователей `(group)` возможности работать с содержимым папки `(dir)` в зависимости от флага `(flag)`

```
chmod g-wx,o-w acorn
```

```
chmod u=rw,go=r acorn
```

* `chmod 777 [file]` - Команда. Установление на файл всех доступов для всех пользователей
* `chmod -R 777 [dir]` - Команда. Установление всех доступов для папки `(dir)` и рекурсивно всех файлов внутри нее

### Восьмеричная система доступов:

* Read = 4
* Write = 2
* Execute = 1

***

* **0** - `---`
* **1** - `--x`
* **2** - `-w-`
* **3** - `-wx`
* **4** - `r--`
* **5** - `r-x`
* **6** - `rw-`
* **7** - `rwx`

***

* `chgrp group file` - Команда. Изменение группы пользователей на новую `(group)` для файла `(file)` (Только для создателя файла или для `SuperUser`)
* `sudo [cmd]` - Выполнение команды `(cmd)` от имени суперпользователя

## Удаленный доступ

* `ssh [ip]` - Команда. Удаленный доступ к сайту с IP `(ip)`
* `ssh [site]` - Команда. Удаленный доступ к сайту `(site)`
  * `ssh [site] -l [user]` - Удаленный доступ к сайту `(site)` от имени пользователя `(user)`
* `exit` - Команда. Выход из удаленной машины
* `scp [file] [server]` - Команда. Копирование файла `(file)` на удаленный сервер `(server)`
  * `-r` - Флаг. Позволяет копировать файлы рекурсивно
* `scp [server] [dest]` - Команда. Копирование файла с сервера `(server)` на локальный компьютер в место `(dest)`

```
scp [source] [destination]
scp file.txt server:/dir
scp site.com:~file.txt .
```

```
scp  -r dir1 site.com:~
```

## Железо

* `df -h` - Команда. Показывает, какие жесткие диски подключены к компьютеру
* `du -sh` - Команда. Показывает вес папки
* `top` - Команда. Показывает запущенные процессы и кто сколько ест `---`
* `kill [proc]` - Отключение запущенного процесса с id `(proc)`