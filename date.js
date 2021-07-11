// module.exports=getDate;
//redundant function to use
exports.getDate=function()
{
  const today = new Date();
  // var currentDay = today.getDay();
  // var day = "";
  //There is a object creation

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
    const day = today.toLocaleDateString("en-US", options);
    return day;
  }
exports.getDay=function()
{
  const today=new Date();
  const options={
    weekday:"long"
  }
  const day=today.toLocaleString("en-US",options);
  return day;
}
