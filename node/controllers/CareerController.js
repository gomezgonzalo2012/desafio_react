import Career from "../models/Career.js";
import { Op } from "sequelize"; // Importa Op para usar operadores de Sequelize


// mostrar todas las carreras
export const getAllCareers = async (req, res)=>{
    try{
        const careers = await Career.findAll()
        res.json(careers)
    }catch(error){
        res.json({message:error.message})
    }
}
// mostrar por id
export const getCareer = async (req, res)=>{
    try{
        const career = await Career.findOne({
            where:{id:req.param.id}
        })
        res.json(career)
    }catch(error){
        res.json({message: error.message})
    }
}
// mostrar por name


export const getCareerByName = async (req, res) => {
  try {
    const careers = await Career.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`, // Usa req.params.name para obtener el valor del parámetro de la URL
        },
      },
    });
    res.json(careers); // Devuelve todas las carreras que contengan el nombre
  } catch (error) {
    res.json({ message: error.message });
  }
};

// crear una carrera
export const createCareer = async (req, res)=>{
    try{
        await Career.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })

    }catch(error){
        res.json({message: error.message})
    }
}

// editas carrera
export const updateCareer = async (req, res)=>{
    try{
        const id = req.params.id;
        await Career.update(req.body,{
            where: {id: id}
        })
        res.json({
            "message":"Registro editado correctamente"
        })

    }catch(error){
        res.json({message: error.message})
    }
}