Exercise for และ while
1.เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร

เลข 1

2.code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม

ไม่เหมือน loop ที 2่่ i++ มีค่า5 เพิ่มมา

3.code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม

เหมือนกัน่

4.ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา

for (let i = 0; i <= 10; ++i) console.log(i);

5.เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loopโดยที่ผลลัพธ์ยังเหมือนเดิม  

let i = -1;
while (++i < 3) alert(`number ${i}!`);

6.ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
    - ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
        - และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น

        let p1 = prompt("Player 1 enter number")
        while (true) {
            if (p1 >= 1 && p1 <= 100) {
                console.log(p1)
                p2 = prompt("Player 2 enter number")
                if (p2 > p1)
                    alert("มากกว่า")
                else if (p2 < p1)
                    alert("น้อยกว่า")
                else if (p2 === p1) {
                    alert("ถูกต้อง")
                    break;
                }
            }
            else
                p1 = prompt("Player 1 enter number")
        }
