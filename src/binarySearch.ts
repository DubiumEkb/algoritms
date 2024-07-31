/**
 * Функция для выполнения бинарного поиска в отсортированном массиве.
 * @param arr - отсортированный массив элементов.
 * @param target - элемент, который нужно найти.
 * @returns индекс найденного элемента или -1, если элемент не найден.
 */

interface User {
	id: number;
	name: string;
	email: string;
}

function binarySearch(arr: User[], target: number): number {
	// Задаем начальное значение (начало массива) и конечное значение (конец массива)
	let left = 0; // Начальное значение для поиска (начало массива)
	let right = arr.length - 1; // Конечное значение для поиска (конец массива)

	// Цикл продолжается, пока левая часть не превысит правую
	while (left <= right) {
		// Вычисляем средний индекс текущего диапазона поиска
		const mid = Math.floor((left + right) / 2);

		// Проверяем, совпадает ли элемент в середине с нужным значением
		if (arr[mid].id === target) {
			// Возвращаем индекс найденного элемента
			return mid;
		}

		// Если элемент в середине меньше нужного значения
		else if (arr[mid].id < target) {
			// Перемещаем левую часть вправо, чтобы искать в правой части
			left = mid + 1;
		}
		// Если элемент в середине больше нужного значения
		else {
			// Перемещаем правую часть влево, чтобы искать в левой части
			right = mid - 1;
		}
	}

	// Если элемент не найден в массиве
	return -1; // Возвращаем -1, если элемент отсутствует
}

/**
 * Пример где в жизни может пригодиться:
 * Если на бэкэнде вы получили список пользователей,
 * отсортированный по какому-то критерию (например, по ID),
 * и вам нужно быстро найти определённого пользователя по этому критерию,
 * то бинарный поиск будет отличным выбором для этой задачи.
 * @param arr - отсортированный массив элементов.
 * @param targets - массив целевых значений, которые нужно найти.
 * @returns массив индексов найденных элементов. Если элемент не найден, в массиве будет -1.
 */

function findUsersByIds(arr: User[], ids: number[]): User[] {
	// Создание Map для хранения найденных пользователей по их ID
	const userMap = new Map<number, User>();

	// Проход по массиву используя ID как ключ
	ids.forEach((id) => {
		const index = binarySearch(arr, id);
		if (index !== -1) {
			userMap.set(id, arr[index]);
		}
	});

	// Возвращаем значения Map в виде массива
	return Array.from(userMap.values());
}

// Список пользователей
const users: User[] = [
	{ id: 1, name: "Alice", email: "alice@example.com" },
	{ id: 3, name: "Bob", email: "bob@example.com" },
	{ id: 5, name: "Charlie", email: "charlie@example.com" },
	{ id: 7, name: "David", email: "david@example.com" },
	{ id: 9, name: "Eve", email: "eve@example.com" },
	{ id: 11, name: "Frank", email: "frank@example.com" },
];

// ID пользователей, которых нужно найти
const userIds = [3, 5, 9];

// Поиск пользователей по ID
const result = findUsersByIds(users, userIds);

// Вывод найденных пользователей в консоль
console.log(result);
