const saveAttendance = async () => {
    if (!selectedClass || !selectedSubject) {
      setMessage('Por favor selecciona una clase y materia');
      return;
    }

    // Verificar si ya existe asistencia para este día
    const key = `attendance:${selectedClass}:${selectedSubject}:${format(selectedDate, 'yyyy-MM-dd')}`;
    try {
      const existingAttendance = await window.storage.get(key);
      if (existingAttendance) {
        setMessage('Ya se registró la asistencia para esta fecha. No se puede volver a registrar.');
        return;
      }
    } catch (error) {
      // Si no existe, continuamos con el guardado
    }

    const attendanceData = students.map(student => ({
      studentId: student.id,
      name: student.name,
      status: attendance[student.id] || 'presente'
    }));

    try {
      await window.storage.set(key, JSON.stringify(attendanceData));
      setMessage('Asistencia guardada exitosamente');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error al guardar la asistencia');
      console.error(error);
    }
  };