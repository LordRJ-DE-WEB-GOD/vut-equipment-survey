function val(name){return document.querySelector(`input[name="${name}"]:checked`)?.value||""}
function checkedVals(name){return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(x=>x.value)}

function submit(){
  const data={
    player_name:document.getElementById("name").value.trim()||"Anonymous",
    q1:val("q1"),
    q2:val("q2"),
    q3:Number(document.getElementById("q3").value)||null,
    q4:val("q4"),
    q5:document.getElementById("q5").value.trim(),
    q6:val("q6"),
    q7:val("q7"),
    q8:document.getElementById("q8").value.trim(),
    q9:val("q9"),
    q10:checkedVals("q10")
  };
  const required=["q1","q2","q3","q4","q6","q7","q9"];
  if(required.some(k=>!data[k])){document.getElementById("msg").textContent="Please answer all required multiple-choice questions.";return}

  document.getElementById("submitBtn").disabled=true;
  supabaseClient.from("survey_responses").insert(data).then(({error})=>{
    if(error){document.getElementById("msg").textContent=error.message;document.getElementById("submitBtn").disabled=false}
    else{document.getElementById("survey").classList.add("hidden");document.getElementById("thanks").classList.remove("hidden")}
  });
}
document.getElementById("submitBtn").onclick=submit;
