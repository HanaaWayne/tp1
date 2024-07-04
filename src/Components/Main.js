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
        margin: 50px 0 50px 0 ;
        height: 530px;
    `
    const Todo = styled.div`
        display: flex;
        justify-content: center;
        width: 700px;
        background-color: hsl(320, 38%, 64%); 
        border-radius: 10px
    `

    const day = [1,2,3,4,5,6,7,8,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
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
                
                <div>
                    <H1 className="text-light">Ma Todolist</H1>
                    <InputBox label="Faire les courses du mois" />
                    <InputBox label="Partir chez le médecin"/>

                    <Button label="Supprimer"/>

                    <h3>Nouvelle tâche</h3>

                    <div>
                        <InputTask label="Titre"/>
                        <InputDescription label="Description"/>
            
                        <p>Date de fin</p>
                        <SelectDate  date={day}/>
                        <SelectDate  date={month}/>
                        <SelectDate  date={years}/>
                    </div>
            
                    <p>Priotité</p>
                    <PriorityBox label="Basse"/>
                    <PriorityBox label="normale"/>
                    <PriorityBox label="Haute"/>


                    <Button label="Enregistrer"/>
                </div>
            </Todo>
        </Container>
    )
} 