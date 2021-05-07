// problem:01( finding meter)
function kilometerToMeter(num)
{
    if(num<0)
    {
        console.log("enter valid number");
    }
    else{
        var result = num * 1000;
        return result;
    }
}
var meter = kilometerToMeter(59);
console.log(meter);

//problem: 02( finding budget)
function budgetCalculator(watch, phone, laptop)
{
    if(watch<0 || phone<0 || laptop<0)
    {
        console.log("enter valid number");
    }
    else{
        var tpw = watch * 50;//tpw(total price of watch);
        var tpp = phone * 100;//tpp(total price of phone);
        var tpl = laptop * 500;//tpl(total price of laptop);

        var total = tpw + tpp + tpl;
        return total;
    }
}
var budget = budgetCalculator(1,1,1);
console.log(budget);

//problem: 03( finding total_cost)
function totalCost(n_day)
{
    if(n_day < 0){
        console.log("enter valid number");
    }
    else if(n_day <= 10)
    {
        var cost = n_day * 100;
    }
    else if(n_day <= 20)
    {
        var ftd = 10 * 100;//ftd(first ten day);
        var remaining = n_day - 10;
        var rd = remaining * 80; // rd(remaining day);
        var cost = ftd + rd;
    }
    else{
        var ftd = 10 * 100;
        var std = 10 * 80;//std( second ten day);
        var remaining = n_day - 20;
        var rd = remaining * 50;
        var cost = ftd + std + rd;
    }
    return cost;
}
var count = totalCost(21);
console.log(count);

//problem: 04(finding big_name)
function megaFriend(m_f)    // mf(mega _ friend);
{
    var boro = m_f[0];
    for(var i=0; i<m_f.length; i++)
    {
        var element = m_f[i];
        if(element.length > boro.length){
            boro = element;
        }
    }
    return boro;
}

var arr=["abul", "jsj","jdjd","jefrejfn;oer","rfrf"];
var result = megaFriend(arr);
console.log(result);
