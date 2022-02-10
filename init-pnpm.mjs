/**
 * @file
 *
 * 用于初始化每天的构建目录，假设系统中安装了 zx 命令行工具
 *
 * init-pnpm.mjs 基于 pnpm 初始化每天的构建目录
 */
const date = new Date();

let year, month, day;

if (argv._[1]) {
  if (!Number.isInteger(argv._[1])) {
    console.error(chalk.red(`日期参数必须是整数，当前参数为：${argv._[1]}`));
  } else if (String(argv._[1]).length !== 8) {
    console.error(chalk.red(`日期参数必须是 8 位整数，当前参数为：${argv._[1]}`));
  } else if (String(argv._[1]).substring(0, 4) !== String(date.getFullYear()) && String(argv._[1]).substring(0, 4) !== String(date.getFullYear() + 1)) {
    console.error(chalk.red(`日期参数必须是今年或明年的日期，当前参数为：${argv._[1]}`));
  }
  year = String(argv._[1]).substring(0, 4);
  month = String(argv._[1]).substring(4, 6);
  day = String(argv._[1]).substring(6, 8);

  // 检查年月日是否合法
  if (Number(month) > 12 || Number(month) < 1) {
    console.error(chalk.red(`月份参数必须是 1-12 的整数，当前参数为：${argv._[1]}`));
  }
  if (Number(day) > 31 || Number(day) < 1) {
    console.error(chalk.red(`日期参数必须是 1-31 的整数，当前参数为：${argv._[1]}`));
  }

  day = `${year}-${month}-${day}`;
} else {
  year = `${date.getFullYear()}`;
  day = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getDate()}`

}


const dir = `${year}/${day}`
await $`mkdir -p ${dir}`
await $`cd ${dir} && pnpm init -y && echo "# ${day}" >> README.md`

console.log(chalk.green(`dir init successfully`))