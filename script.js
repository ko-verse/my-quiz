document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
  
    if (!q1 || !q2) {
      alert("모든 질문에 답해주세요!");
      return;
    }
  
    let result = "";
  
    if (q1.value === "외향" && q2.value === "활동") {
      result = "당신은 🎉 '활발한 리더형'이에요!";
    } else if (q1.value === "내향" && q2.value === "탐구") {
      result = "당신은 📚 '조용한 연구자형'이에요!";
    } else {
      result = "당신은 😊 '균형 잡힌 조화형'이에요!";
    }
  
    document.getElementById("result").textContent = result;
  });
  