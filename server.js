const express= require("express")
const { exec } = require("child_process")
const app = express()


app.get("/runform",(req,res)=>{
        res.sendFile(__dirname + "/rundocker.html");
})
app.get("/run",(req,res)=>{
        const cname=req.query.cname;
        const cimage=req.query.cimage;

        //res.send(cname + cimage);
        exec("docker run -dit --name "+ cname + " " + cimage,(err,stdout,stderr)=>{
                res.send("<pre>" + stdout+ "</pre>");
        })
})
app.get("/stop",(req,res)=>{
        const cnamed=req.query.cnamed;
        //const cimage=req.query.cimage;

        //res.send(cname + cimage)
        //console.log(cnamed);
        exec("docker stop "+ cnamed,(err,stdout,stderr)=>{
                res.send("<pre>" + stdout+ "</pre>");
        })
})
app.get("/delete",(req,res)=>{
        const cnamed=req.query.cnamed;
        //const cimage=req.query.cimage;

        //res.send(cname + cimage);
        //console.log(cnamed);
        exec("docker rm -f "+ cnamed,(err,stdout,stderr)=>{
                res.send("<pre>" + stdout+ "</pre>");
        })
})
app.get("/ps",(req,res)=>{
        //exec("docker ps | tail -n +2 | awk '{print '<h2>' $2,$7,$10 '</h2>'}' ",(err,stdout,stderr)=>{
        //      res.send("<pre>"+stdout+"</pre>");
        //})

        exec("docker ps | tail -n +2",(err,stdout,stderr)=>{
                let a = stdout.split("\n");

                res.write("<table border='5' align='center' width='80%'>");
                res.write("<tr><th>Container ID </th><th>Container Image</th><th>Command</th><th>Container Name</th></tr>");
                a.forEach((cdetails)=>{
                        cinfo = cdetails.trim().split(/\s+/)
                        //console.log( cdetails.trim().split(/\s+/) );

                        console.log(cinfo[0] + " " +cinfo[1]+ " "+cinfo[2])
                        res.write("<tr>" + "<td>" + cinfo[0] +"</td>" + "<td>" +cinfo[1]+ "</td>" +"<td>"+ cinfo[2] + "</td>"+"<td>"+cinfo[cinfo.length-1] +"</td>"+"</tr>")
                })
                res.write("</table>");
                res.send();
                //res.send(cinfo[0] + " " +cinfo[1]+ " "+cinfo[2])
                //res.send("<pre>"+ stdout + "</pre>");
        })
})


app.listen(3000,()=>{
        console.log("Container App started on port 3000");
})
