function skillsMember() {
  var member = document.getElementById("member");
  var memberText = member.options[member.selectedIndex].text;
  var memberValue = member.value;
  var memberObj = {
    "member": memberValue,
    "memberText": memberText
  };
  return memberObj;
}