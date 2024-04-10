'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { getAllUsers } from "@/app/services/user";
import { exportPreferences, exportMatching } from "@/app/services/exports";
import { Card, Typography, CardFooter,Button } from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/app/providers/UserProvider";



export default function AdminTableUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(0); 
    const usersPerPage = 10;
    
    // useEffect(() => {
    //     if (isAdmin === false) {
    //         router.push('/dashboard/login'); // Redirigir al usuario a la página de inicio de sesión si no es administrador
    //     }
    // }, [isAdmin]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response);
                console.log(response)
                setIsLoading(false);
            } catch (error) {
                console.log("error");
                setIsLoading(false);
            }
        };
        getUsers();
    }, []);

    const indexOfLastUser = (currentPage + 1) * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleExportPreferences = async (eventId) => {
        try {
            const response = await exportPreferences(eventId);
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', 'event_Preferences.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error al exportar la asistencia del evento:', error);
        }
      };

      const handleExportMatchings = async (userId) => {
        try {
            const response = await exportMatching(userId);
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
    
            link.href = url;
            link.setAttribute('download', 'event_Matchings.xlsx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    
        } catch (error) {
            console.error('Error al exportar los matches:', error);
        }
    };

  return ( 
    <>
        <div className='mb-4'>
            <Button
            variant="filled"
            className='flex justify-center items-center gap-1' 
            size="sm"
            onClick={() => handleExportPreferences()} 
            >
            <img src="/assets/icon/icon-excel.svg" alt="Excel" /> Descargar Tests de Usuarios 
            </Button>
            
        </div>
        <Card>
            <table className="w-full table-auto text-left">
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">ID</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Nombre</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Apellido</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Email</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">ID Test</Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Matches</Typography>
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                {currentUsers.slice(1).map((user, index) => (
                        <tr key={index}>
                            <td className="p-4 w-[100px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{user.id}</Typography>
                            </td>
                            <td className="p-4 w-[200px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{user.name}</Typography>
                            </td>
                            <td className="p-4 w-[200px]">
                                <Typography variant="small" color="blue-gray" className="font-normal">{user.lastname}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{user.email}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">{user.preference_id}</Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                <Button 
                                    variant="outlined"
                                    className='flex justify-center items-center gap-1' 
                                    size="sm"
                                    onClick={() => handleExportMatchings(user.id)} > {/* Usando una función anónima */}
                                    <img src="/assets/icon/icon-excel.svg" alt="Excel" />
                                    Descargar
                                </Button>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
             <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
             <Typography variant="small" color="blue-gray" className="font-normal">
                Page {currentPage + 1} of {Math.ceil(users.length / usersPerPage)}
             </Typography>
             <div className="flex gap-2">
             <Button 
                        variant="outlined" 
                        size="sm" 
                        onClick={() => setCurrentPage(currentPage === 0 ? currentPage : currentPage - 1)}
                    >
                        Anterior
                    </Button>
                    <Button 
                        variant="outlined" 
                        size="sm" 
                        onClick={() => setCurrentPage(currentPage === Math.ceil(users.length / usersPerPage) - 1 ? currentPage : currentPage + 1)}
                    >
                        Siguiente
                    </Button>
             </div>
           </CardFooter>
        </Card>
        </>
  )
}
