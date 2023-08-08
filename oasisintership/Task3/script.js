function convert()
{
    let type=document.getElementById('type').value;
    let tem=parseFloat(document.getElementById('value').value);
    let celsius=document.getElementById('cel');
    let fahrenheit=document.getElementById('faren');
    let kelvin=document.getElementById('kelv');
    if(type==="celcius")
    {
        celsius.value=parseFloat(tem.toFixed(2));
        let f=(tem*9)/5+32;
        fahrenheit.value=parseFloat(f.toFixed(2));
        let k=tem+273.15;
        kelvin.value=parseFloat(k.toFixed(2));
    }
    else if(type==="farenheit")
    {
        fahrenheit.value=parseFloat(tem.toFixed(2));
        let c=((tem-32)*5)/9;
        celsius.value=parseFloat(c.toFixed(2));
        let k=c+273.15;
        kelvin.value=parseFloat(k.toFixed(2));
    }
    else if(type==="kelvin")
    {
        kelvin.value=parseFloat(tem.toFixed(2));
        let f=((tem-273.15)*9)/5+32;
        fahrenheit.value=parseFloat(f.toFixed(2));
        let c=((tem-273.15));
        celsius.value=parseFloat(c.toFixed(2));
    }

}
function Reset()
{
    document.getElementById('type').value='';
    document.getElementById('value').value='';
    document.getElementById('cel').value='';
    document.getElementById('faren').value='';
    document.getElementById('kelv').value='';

}
