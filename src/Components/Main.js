import React from "react"
import InputBox from "./InputBox"
import Button from "./Button"
import InputTask from "./InputTask"
import InputDescription from "./InputDescription"
import SelectDate from "./SelectDate"
import PriorityBox from "./PriorityBox"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(){

    const H1 = styled.h1`
       color : red;
       text-align: center;
       
    `
    const Container = styled.div`
        display: flex;
        justify-content: center;
        margin: 50px 0 80px 0 ;
        height: 670px;
    `
    const Todo = styled.div`
        display: flex;
        justify-content: center;
        width: 700px;
        background-color: hsl(320, 38%, 64%); 
        border-radius: 10px
    `

    // const day = [1,2,3,4,5,6,7,8,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const day = Array.from({ length: 30 }, (_, i) => i + 1);
    const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    // const year = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]

    const generateYears = (startYear, endYear) => {
        let years = [];
        for (let year = startYear; year <= endYear; year++) {
          years.push(year);
        }
        return years;
    };
    
    const years = generateYears(1902, 2024)

    return(
        <Container>
            <Todo className="d-flex justify-content-center">
                
                <div className="w-50">
                    <H1 className="text-light mt-3">Ma Todolist</H1>

                    <div className="mt-4">
                        <InputBox label="Faire les courses du mois" />
                        <InputBox label="Partir chez le médecin"/>
                    </div>
                   
                    <div className="w-100 mt-3 ms-5">
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore 
                       </p>
                    </div>
                    
                    <Button label="Supprimer" className="btn btn-light mt-2"/>

                    <hr className="border border-light border-2 mt-4"/>

                    <h3 className="mt-4 text-light">Nouvelle tâche</h3>

                    <div>
                        <InputTask label="Titre"/>
                    </div>
                    <div>
                        <InputDescription label="Description"/>
                    </div>

                    <div className="d-flex mt-3">
                        <div>
                            <p className="text-light">Date de fin</p>
                        </div>
                        <div>
                            <SelectDate  date={day} className="ms-4 rounded-2"/>
                            <SelectDate  date={month} className="w-25 ms-3 rounded-2 "/>
                            <SelectDate  date={years} className="w-25 ms-3 rounded-2"/>
                        </div>
                    </div>
    
                    <div className="d-flex mt-2">
                        <div>
                            <p className="text-light">Priotité</p>
                        </div>
                        <div className="ms-4">
                            <PriorityBox label="Basse"/>
                            <PriorityBox label="normale"/>
                            <PriorityBox label="Haute"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                         <Button label="Enregistrer" className="btn btn-light mt-2 "/>
                    </div>
                </div>
            </Todo>
        </Container>
    )
} 