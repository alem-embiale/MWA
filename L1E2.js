function isWeekedn(){
	const todayDate = new Date();
	const todayDay = todayDate.getDay();
  return (todayDay === 0 || todayDay === 6) ? "weekend" : "weekday";
}
console.log(isWeekedn());