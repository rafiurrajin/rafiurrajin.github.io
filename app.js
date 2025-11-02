const x1=document.getElementById('x1');
const x2=document.getElementById('x2');
const y=document.getElementById('y');

async function getData() {
  try {
    const v1=x1.value.toUpperCase();
    const v2=x2.value.toUpperCase();
    const response = 
      await fetch(`https://rafiurrajin.github.io/out/${v1+v2}.txt`,
      { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();

    const response2 = 
      await fetch(`https://rafiurrajin.github.io/main/${v1}.txt`,
      { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data2 = await response2.text();

    const arr=data.split(';'); arr.pop(); arr.reverse();
    const arr2=data2.split(';'); arr2.pop(); let total=0;
    for  (const v of arr2) total+=Number(JSON.parse(v)[1]);
    arr2.push(`["Total",${total}]`); arr2.reverse();
    const d=document.getElementById('k');
    if(d!=null) d.remove();
    const ele=document.createElement('div');
    ele.id='k';
    for (const [i,x] of arr.entries()) {
      const y=JSON.parse(x);
      const e=document.createElement('h1');
      const j=JSON.parse(arr2[i]);
      e.innerHTML=`${j[0]}<br>Marks Obtained ${y[0]}/${j[1]}<br>Rank is ${y[1]}`;
      ele.appendChild(e);
    }
    document.body.appendChild(ele);
  } catch (error) {
    alert('Doesnt exist'+error);
  }
}

y.addEventListener("click",getData);
