/**
 * 公司创新实验室正在研究如何最小化资源成本，最大化资源利用率，请你设计算法帮他们
 * 解决一个任务混部问题：有 taskNum 项任务，每个任务有开始时间（startTime
 * ），结束时间（endTime），并行度(parallelism)三个属性，并行度是指这个任务运行时将
 * 会占用的服务器数量，一个服务器在每个时刻可以被任意任务使用但最多被一个任务占用
 * ，任务运行完会立即释放（结束时刻不占用）。任务混部问题是指给定一批任务，让这批
 * 任务由同一批服务器承载运行，请你计算完成这批任务混部最少需要多少服务器，从而最
 * 大化控制资源成本。 输入描述
 * 第一行输入为 taskNum，表示有 taskNum 项任务
 * 接下来 taskNum 行，每行三个整数，表示每个任务的开始时间（startTime
 * ），结束时间（endTime），并行度(parallelism)
 * 输出描述
 * 一个整数，表示最少需要的服务器数量
 * @param {{ startTime: number, endTime: number, parallelism: number }} tasks 任务列表
 * @returns 最多需要多少机器
 */
function taskManage(tasks) {
  const events = []

  tasks.forEach(task => {
    events.push({ time: task.startTime, parallelism: task.parallelism })
    events.push({ time: task.endTime, parallelism: -task.parallelism })
  })

  let currentParallelism = 0
  let maxParallelism = 0

  events.sort((a, b) => a.time - b.time)

  for (let i = 0; i < events.length; i++) {
    currentParallelism += events[i].parallelism
    maxParallelism = Math.max(maxParallelism, currentParallelism)
  }

  return maxParallelism
}

/**
 * 输入单行英文句子，里面包含英文字母，空格以及,.?
 * 三种标点符号，请将句子内每个单词进行倒序，并输出倒序后的语句
 * 输入描述
 * 输入字符串 S，S 的长度 1≤N≤100
 * 输出描述
 * 输出逆序后的字符串
 * @param {string} str 字符串
 * @returns 翻转后的字符串
 */
function revertString(str) {
  const arr = str
    .split(/[\s,.?]/)
    .map(s => s.split('').reverse().join(''))
    .join('')
    .split('')
  for (let i = 0; i < str.length; i++) {
    if ([' ', ',', '.', '?'].includes(str[i])) {
      arr.splice(i, 0, str[i])
    }
  }
  return arr.join('')
}
