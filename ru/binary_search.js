/* 

# Задача поиска телефона по фамилии и имени человека в телефонном справочнике.

Входные данные (что мы имеем изначально):
* список пар “фамилия, имя — телефон”, отсортированный по алфавиту
  (сначала фамилии, если фамилии совпадают — имена) — состоит из N пар.
  Говорят “длина списка равна N”, или, более общо, “размер задачи равен N”
* фамилия и имя искомого человека

Выходные данные (что мы хотим узнать):
* телефон искомого человека
* место в списке, где находится запись об искомом человеке и его телефоне

Метод решения:

1. Мы начинаем поиск, рассматривая список целиком — любой из N элементов
   может оказаться нашим искомым
2. Открываем справочник ровно посередине и сравниваем среднюю запись с искомой.
3. Если средняя фамилия справочника совпадает с искомой — ура, мы всё нашли.
   Закончить работу, вернуть обнаруженную пару.
4. Если средняя фамилия справочника по алфавиту идёт позднее искомой — вторую часть справочника
   мы отбрасываем (упрощаем задачу себе вдвое тем самым), а в первой повторяем поиск начиная с
   пункта (2) нашего алгоритма
5. Если же средняя фамилия справочника по алфавиту идёт раньше искомой, то отбрасываем уже первую
   часть справочника, а поиск с пункта (2) повторяем для второй.

*/