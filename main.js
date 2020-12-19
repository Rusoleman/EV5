let cars=[
    {
        id:1,
        model:'Civic',
        brand:'Honda',
        color:'red',
        year:2016,
        price:10000

    }
];

function printCar(){
    const container= document.getElementById('container-cars');
    let html=' ';

    cars.forEach((car)=>{
        html += `<tr>
                    <td>${car.model}</td>
                    <td>${car.brand}</td>
                    <td>${car.color}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td>
                        <button onclick="deleteC(${car.id})" class="btn btn-danger">
                            Delete
                        </button>
                    </td>
                 </tr>`;
    });
    container.innerHTML=html;
}

function addCar(){
    const inputModel=document.getElementById('model');
    const model=inputModel.value;

    const brand=document.getElementById('brand').value;
    const year=document.getElementById('year').value;
    const color=document.getElementById('color').value;
    const price=document.getElementById('price').value;
    const id=cars[cars.length -1].id+1;

    const newCar={
        model,
        brand,
        year,
        color,
        price,
        id
    }
    cars.push(newCar);
    printCar();

    document.getElementById('form-car').reset();
}

function deleteC(id){
    const index= cars.findIndex((car) => car.id == id);
    cars.splice(index,1);

    printCar();
}
printCar();