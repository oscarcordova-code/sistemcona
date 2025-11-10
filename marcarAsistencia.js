    marcarAsistencia(estudianteId, materiaId, fecha, estado, docenteId) 
{
        // Verificar que el docente esté asignado a la materia
        const materiaRef = ref(this.db, `materias/${materiaId}`);
        const materiaSnapshot = await get(materiaRef);
        
        if (!materiaSnapshot.exists()) {
            throw new Error('La materia no existe');
        }
        
        const materia = materiaSnapshot.val();
        if (materia.docenteId !== docenteId) {
            throw new Error('Solo el docente asignado a esta materia puede registrar asistencia');
        }
        
        const asistenciaRef = ref(this.db, `asistencias/${materiaId}/${estudianteId}/${fecha}`);
        await set(asistenciaRef, {
            estado,
            fechaRegistro: new Date().toISOString(),
            registradoPor: docenteId
        });
    }