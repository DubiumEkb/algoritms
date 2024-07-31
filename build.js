const { execSync } = require("child_process");
const path = require("path");

const fileName = process.argv[2];

if (!fileName) {
	console.error("Please specify the file name.");
	process.exit(1);
}

// Путь к исходному TypeScript файлу
const inputFile = path.resolve(__dirname, "src", fileName);

// Путь к скомпилированному JavaScript файлу
const outputFile = path.resolve(
	__dirname,
	"dist",
	path.basename(fileName, ".ts") + ".js"
);

try {
	// Проверка наличия ts-node
	execSync("npx ts-node --version", { stdio: "ignore" });

	// Выполнение TypeScript файла с помощью ts-node
	console.log(`Выполняем ${inputFile}`);
	execSync(`npx ts-node ${inputFile}`, { stdio: "inherit" });
	console.log(`Выполнено`);
} catch (error) {
	console.error("Error during execution:", error.message);
	process.exit(1);
}
