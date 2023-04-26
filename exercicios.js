//Encontre os CPF's e os IP's

const cpfs = `Os CPFs são:
254.244.877-45 215.978.456-12 047.258.369-95

963.987.321-00`

const ips = `Os IPs são:
0.0.0.0

192.168.0.25

10.10.5.12  255.255.255.255
`

const regExpCPF = /(\d{3}\.){2}\d{3}\-\d{2}/g

console.log(cpfs.match(regExpCPF))

const regExpIP = /((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))/g

console.log(ips.match(regExpIP))