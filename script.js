 const grupoAlumnos = [
        { matricula: "232610453-2", nombre: "Abrego Najera Zita Yalia", telefono: "2217358856" },
        { matricula: "232610078-7", nombre: "Aguilar Fernandez Axel Raymundo", telefono: "2214423852" },
        { matricula: "232610234-6", nombre: "Aguilar Martínez Montserrat", telefono: "2213074914" },
        { matricula: "232610012-6", nombre: "Betancourt Benitez Miguel Angel", telefono: "2215799194" },
        { matricula: "232610466-4", nombre: "Carrasco Gomez Erick Santiago", telefono: "2225106154" },
        { matricula: "232610446-6", nombre: "Cordova Gonzalez Oscar Rubiel", telefono: "2212507907" },
        { matricula: "232610396-3", nombre: "Criollo Quiroz Karla", telefono: "2212172918" },
        { matricula: "232610057-1", nombre: "Dolores Esteban Alexis Uriel", telefono: "2212626295" },
        { matricula: "232610176-9", nombre: "Elizalde Rodriguez Karla Ivonne", telefono: "2212123474" },
        { matricula: "232610094-4", nombre: "Encarnación Mendieta Jazmín", telefono: "2213416769" },
        { matricula: "232610221-3", nombre: "Garcia Hernandez Ana Rocio", telefono: "222039635" },
        { matricula: "232610248-6", nombre: "Garcia Ortega Daniel", telefono: "2201915401" },
        { matricula: "232610516-6", nombre: "Guagnelli Torres Daniela", telefono: "2215861471" },
        { matricula: "232610531-5", nombre: "Gutiérrez Montero Gabriel", telefono: "2225500043" },
        { matricula: "232610462-3", nombre: "Hernández Díaz Angel Alexis", telefono: "2223338014" },
        { matricula: "232610504-2", nombre: "Hernández Hernández Angel Ilhuikatl", telefono: "2381133058" },
        { matricula: "232610167-8", nombre: "Isasmendi Orea Jennifer Mayte", telefono: "2214447798" },
        { matricula: "232610226-2", nombre: "Martines Esteban Leonel", telefono: "222314171879" },
        { matricula: "232610072-0", nombre: "Merino Garcia Christopher Felipe", telefono: "5638313607" },
        { matricula: "232610141-3", nombre: "Ochoa Rodriguez Abdiel", telefono: "2225666367" },
        { matricula: "232610199-1", nombre: "Ortuño Flores Evelyn Vanessa", telefono: "2227270337" },
        { matricula: "232610508-3", nombre: "Palacios Aguilar Jazmin", telefono: "2202986496" },
        { matricula: "232610140-5", nombre: "Pereyra Figueroa Abril Constanza", telefono: "5515897828" },
        { matricula: "232100748-2", nombre: "Perez Alvarez Juan Pablo", telefono: "2221542735" },
        { matricula: "232610213-0", nombre: "Perez Cortez Alberto Ismael", telefono: "2217729872" },
        { matricula: "232610145-4", nombre: "Pérez Morales Noaj Aarón", telefono: "2205128075" },
        { matricula: "232610285-8", nombre: "Ponce Francisco Alexander Tonatihu", telefono: "2215633682" },
        { matricula: "232610071-2", nombre: "Rodriguez Ramos Esteban Guadalupe", telefono: "2211085439" },
        { matricula: "232610097-7", nombre: "Rojas Bello Saul", telefono: "2221053859" },
        { matricula: "232610417-7", nombre: "Rojas Chapa Leonardo", telefono: "2222382343" },
        { matricula: "232610086-0", nombre: "Rojas Huerta Vanesa", telefono: "2215775158" },
        { matricula: "232610062-1", nombre: "Rosete López Logan", telefono: "3343994337" },
        { matricula: "232610218-9", nombre: "Ruiz Ramires Gael Eliud", telefono: "2228036372" },
        { matricula: "232610178-5", nombre: "Salazar Roblero Sofia", telefono: "2218365260" },
        { matricula: "232610301-8", nombre: "Sánches Esesarte Regina Sinsuni", telefono: "2228791929" },
        { matricula: "232610138-9", nombre: "Segura Ruela Jonathan", telefono: "2223946947" },
        { matricula: "232610139-7", nombre: "Teopila Sarmiento Yaretzi", telefono: "2214156118" },
        { matricula: "232610098-5", nombre: "Xoxotla Luna Emanuel", telefono: "2217261840" },
        { matricula: "232610077-9", nombre: "Zarate Zepeda Valentin Erick", telefono: "2214371314" }
    ];

    const grupos = [
        { id: 'grupo1', nombre: 'Análisis de criptografía y seguridad- 502CDIA', alumnos: 39 },
        { id: 'grupo2', nombre: 'Ciberseguridad en aplicaciones WEB- 502CDIA', alumnos: 39 },
        { id: 'grupo3', nombre: 'Conciencia histórica II: Siglos XIX y XX- 502CDIA', alumnos: 39 },
        { id: 'grupo4', nombre: 'Descripción de organismos biológicos y procesos evolutivos- 502CDIA', alumnos: 39 },
        { id: 'grupo5', nombre: 'Formación socioemocional V- 502CDIA', alumnos: 39 },
        { id: 'grupo6', nombre: 'Interacción especializada en inglés- 502CDIA', alumnos: 39},
        { id: 'grupo7', nombre: 'Reconocimiento de patrones- 502CDIA', alumnos: 39 },
        { id: 'grupo8', nombre: 'Temas selectos de Matemáticas II- 502CDIA', alumnos: 39 },
        { id: 'grupo9', nombre: 'Uso de herramientas de explotación de datos- 502CDIA', alumnos: 39 }
    ];

    // Variables globales
    let asistencias = {};
    let reportes = {};
    let todayAttendance = {};
    let currentGroup = null;
    let currentStudent = null;
    let currentTeacher = null;
    let registeredStudents = {};
    let registeredTeachers = {};
    let reportMatricula = null;

    // Cargar datos del localStorage
    loadData();

    function loadData() {
        const savedAsistencias = localStorage.getItem('asistencias');
        const savedReportes = localStorage.getItem('reportes');
        const savedStudents = localStorage.getItem('registeredStudents');
        const savedTeachers = localStorage.getItem('registeredTeachers');

        if (savedAsistencias) asistencias = JSON.parse(savedAsistencias);
        if (savedReportes) reportes = JSON.parse(savedReportes);
        if (savedStudents) registeredStudents = JSON.parse(savedStudents);
        if (savedTeachers) registeredTeachers = JSON.parse(savedTeachers);

        initAsistencias();
    }

    function saveData() {
        localStorage.setItem('asistencias', JSON.stringify(asistencias));
        localStorage.setItem('reportes', JSON.stringify(reportes));
        localStorage.setItem('registeredStudents', JSON.stringify(registeredStudents));
        localStorage.setItem('registeredTeachers', JSON.stringify(registeredTeachers));
    }

    function initAsistencias() {
        grupoAlumnos.forEach(alumno => {
            if (!asistencias[alumno.matricula]) {
                asistencias[alumno.matricula] = [];
            }
            if (!reportes[alumno.matricula]) {
                reportes[alumno.matricula] = [];
            }
        });
    }

    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // REGISTRO DE ESTUDIANTES
    function registerStudent() {
        const matricula = document.getElementById('regStudentId').value.trim();
        const password = document.getElementById('regStudentPassword').value;
        const password2 = document.getElementById('regStudentPassword2').value;

        if (!matricula || !password || !password2) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (password !== password2) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        const alumno = grupoAlumnos.find(a => a.matricula === matricula);
        
        if (!alumno) {
            alert('Matrícula no encontrada en el sistema');
            return;
        }

        if (registeredStudents[matricula]) {
            alert('Esta matrícula ya está registrada');
            return;
        }

        registeredStudents[matricula] = {
            password: password,
            nombre: alumno.nombre,
            telefono: alumno.telefono
        };

        saveData();
        alert('¡Registro exitoso! Ahora puedes iniciar sesión');
        document.getElementById('regStudentId').value = '';
        document.getElementById('regStudentPassword').value = '';
        document.getElementById('regStudentPassword2').value = '';
        showPage('studentLogin');
    }

    // REGISTRO DE DOCENTES
    function registerTeacher() {
        const teacherId = document.getElementById('regTeacherId').value.trim();
        const name = document.getElementById('regTeacherName').value.trim();
        const password = document.getElementById('regTeacherPassword').value;
        const password2 = document.getElementById('regTeacherPassword2').value;

        if (!teacherId || !name || !password || !password2) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (password !== password2) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (registeredTeachers[teacherId]) {
            alert('Este ID de empleado ya está registrado');
            return;
        }

        registeredTeachers[teacherId] = {
            password: password,
            nombre: name
        };

        saveData();
        alert('¡Registro exitoso! Ahora puedes iniciar sesión');
        document.getElementById('regTeacherId').value = '';
        document.getElementById('regTeacherName').value = '';
        document.getElementById('regTeacherPassword').value = '';
        document.getElementById('regTeacherPassword2').value = '';
        showPage('teacherLogin');
    }

    // LOGIN ESTUDIANTE
    function loginStudent() {
        const id = document.getElementById('studentId').value.trim();
        const password = document.getElementById('studentPassword').value;

        if (!registeredStudents[id]) {
            alert('Esta matrícula no está registrada. Por favor regístrate primero.');
            return;
        }

        if (registeredStudents[id].password !== password) {
            alert('Contraseña incorrecta');
            return;
        }

        const alumno = grupoAlumnos.find(a => a.matricula === id);
        currentStudent = alumno;
        document.getElementById('studentName').textContent = alumno.nombre;
        document.getElementById('studentMatricula').textContent = alumno.matricula;
        document.getElementById('studentTelefono').textContent = alumno.telefono;
        loadStudentAttendance();
        loadStudentReports();
        showPage('studentDashboard');
    }

    // LOGIN DOCENTE
    function loginTeacher() {
        const id = document.getElementById('teacherId').value.trim();
        const password = document.getElementById('teacherPassword').value;

        if (!registeredTeachers[id]) {
            alert('Este ID de empleado no está registrado. Por favor regístrate primero.');
            return;
        }

        if (registeredTeachers[id].password !== password) {
            alert('Contraseña incorrecta');
            return;
        }

        currentTeacher = { id: id, nombre: registeredTeachers[id].nombre };
        loadGroups();
        showPage('teacherDashboard');
    }

    // LOGOUT
    function logout() {
        document.getElementById('studentId').value = '';
        document.getElementById('studentPassword').value = '';
        document.getElementById('teacherId').value = '';
        document.getElementById('teacherPassword').value = '';
        currentStudent = null;
        currentTeacher = null;
        currentGroup = null;
        showPage('studentLogin');
    }

    // CAMBIAR CONTRASEÑA ESTUDIANTE
    function changeStudentPassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmNewPassword').value;

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (registeredStudents[currentStudent.matricula].password !== currentPassword) {
            alert('La contraseña actual es incorrecta');
            return;
        }

        if (newPassword.length < 6) {
            alert('La nueva contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas nuevas no coinciden');
            return;
        }

        registeredStudents[currentStudent.matricula].password = newPassword;
        saveData();
        alert('¡Contraseña cambiada exitosamente!');
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
    }

    // CAMBIAR CONTRASEÑA DOCENTE
    function changeTeacherPassword() {
        const currentPassword = document.getElementById('teacherCurrentPassword').value;
        const newPassword = document.getElementById('teacherNewPassword').value;
        const confirmPassword = document.getElementById('teacherConfirmNewPassword').value;

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (registeredTeachers[currentTeacher.id].password !== currentPassword) {
            alert('La contraseña actual es incorrecta');
            return;
        }

        if (newPassword.length < 6) {
            alert('La nueva contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas nuevas no coinciden');
            return;
        }

        registeredTeachers[currentTeacher.id].password = newPassword;
        saveData();
        alert('¡Contraseña cambiada exitosamente!');
        document.getElementById('teacherCurrentPassword').value = '';
        document.getElementById('teacherNewPassword').value = '';
        document.getElementById('teacherConfirmNewPassword').value = '';
    }

    // TABS ESTUDIANTE
    function switchStudentTab(event, tabName) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        event.target.classList.add('active');
        
        if (tabName === 'profile') document.getElementById('studentProfile').classList.add('active');
        if (tabName === 'attendance') {
            document.getElementById('studentAttendance').classList.add('active');
            loadStudentAttendance();
        }
        if (tabName === 'reports') {
            document.getElementById('studentReports').classList.add('active');
            loadStudentReports();
        }
        if (tabName === 'settings') document.getElementById('studentSettings').classList.add('active');
    }

    // TABS DOCENTE
    function switchTeacherTab(event, tabName) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        event.target.classList.add('active');
        
        if (tabName === 'groups') document.getElementById('teacherGroups').classList.add('active');
        if (tabName === 'teacherSettings') document.getElementById('teacherSettings').classList.add('active');
    }

    // CARGAR FALTAS DEL ESTUDIANTE
    function loadStudentAttendance() {
        if (!currentStudent) return;
        
        const faltas = asistencias[currentStudent.matricula] || [];
        const faltasCount = faltas.filter(a => a.status === 'absent').length;
        
        document.getElementById('totalFaltas').textContent = faltasCount;
        
        if (faltasCount > 0) {
            document.getElementById('attendanceAlert').style.display = 'block';
        } else {
            document.getElementById('attendanceAlert').style.display = 'none';
        }
        
        const listContainer = document.getElementById('studentFaltasList');
        
        if (faltasCount === 0) {
            listContainer.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No tienes faltas registradas. ¡Excelente asistencia!</p>';
        } else {
            const faltasHTML = faltas
                .filter(a => a.status === 'absent')
                .map(falta => `
                    <div class="attendance-item">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong>${falta.grupo}</strong>
                                <div style="color: #666; font-size: 0.9em;">${falta.fecha}</div>
                            </div>
                            <span class="status falta">FALTA</span>
                        </div>
                    </div>
                `).join('');
            listContainer.innerHTML = faltasHTML;
        }
    }

    // CARGAR REPORTES DEL ESTUDIANTE
    function loadStudentReports() {
        if (!currentStudent) return;
        
        const studentReportes = reportes[currentStudent.matricula] || [];
        const listContainer = document.getElementById('studentReportsList');
        
        if (studentReportes.length === 0) {
            listContainer.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No tienes reportes registrados.</p>';
        } else {
            const reportesHTML = studentReportes.map(reporte => `
                <div class="report-item">
                    <h4>${reporte.tipo}</h4>
                    <p><strong>Fecha:</strong> ${reporte.fecha}</p>
                    <p><strong>Materia:</strong> ${reporte.grupo}</p>
                    <p><strong>Descripción:</strong> ${reporte.descripcion}</p>
                </div>
            `).join('');
            listContainer.innerHTML = reportesHTML;
        }
    }

    // CARGAR GRUPOS
    function loadGroups() {
        const container = document.getElementById('groupsList');
        container.innerHTML = grupos.map(grupo => `
            <div class="group-card" onclick="openAttendance('${grupo.id}', '${grupo.nombre}')">
                <h4>📚 ${grupo.nombre}</h4>
                <div class="group-info">
                    <p>👥 ${grupo.alumnos} alumnos</p>
                    <p style="color: #667eea; margin-top: 5px;">Click para pasar lista →</p>
                </div>
            </div>
        `).join('');
    }

    // ABRIR PASE DE LISTA
    function openAttendance(groupId, groupName) {
        currentGroup = { id: groupId, name: groupName };
        todayAttendance = {};
        document.getElementById('attendanceTitle').textContent = `Pase de Lista`;
        document.getElementById('totalStudents').textContent = grupoAlumnos.length;
        renderAttendanceList();
        showPage('attendancePage');
    }

    // VOLVER A GRUPOS
    function backToGroups() {
        currentGroup = null;
        showPage('teacherDashboard');
    }

    // MARCAR ASISTENCIA
    function markAttendance(matricula, status) {
        todayAttendance[matricula] = status;
        
        if (status !== null) {
            const fecha = new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            if (!asistencias[matricula]) {
                asistencias[matricula] = [];
            }
            
            const existingIndex = asistencias[matricula].findIndex(
                a => a.fecha === fecha && a.grupo === currentGroup.name
            );
            
            if (existingIndex >= 0) {
                asistencias[matricula][existingIndex] = {
                    fecha: fecha,
                    grupo: currentGroup.name,
                    status: status
                };
            } else {
                asistencias[matricula].push({
                    fecha: fecha,
                    grupo: currentGroup.name,
                    status: status
                });
            }
            
            saveData();
        }
        
        renderAttendanceList();
    }

    // RENDERIZAR LISTA DE ASISTENCIA
    function renderAttendanceList() {
        const container = document.getElementById('attendanceList');
        const searchTerm = (document.getElementById('searchStudent').value || '').toLowerCase();
        
        let filteredStudents = grupoAlumnos;
        if (searchTerm) {
            filteredStudents = grupoAlumnos.filter(s => 
                s.nombre.toLowerCase().includes(searchTerm) ||
                s.matricula.includes(searchTerm)
            );
        }

        let presentCount = 0;
        let absentCount = 0;

        container.innerHTML = filteredStudents.map(alumno => {
            const status = todayAttendance[alumno.matricula];
            if (status === 'present') presentCount++;
            if (status === 'absent') absentCount++;

            const cardClass = status === 'present' ? 'present' : status === 'absent' ? 'absent' : '';

            return `
                <div class="student-card ${cardClass}">
                    <div class="student-info">
                        <h5>${alumno.nombre}</h5>
                        <p>Matrícula: ${alumno.matricula} | Tel: ${alumno.telefono}</p>
                    </div>
                    <div class="attendance-controls">
                        ${!status ? `
                            <button class="btn-small btn-present" onclick="markAttendance('${alumno.matricula}', 'present')">
                                ✓ Presente
                            </button>
                            <button class="btn-small btn-absent" onclick="markAttendance('${alumno.matricula}', 'absent')">
                                ✗ Ausente
                            </button>
                        ` : `
                            <span class="status-badge ${status === 'present' ? 'badge-present' : 'badge-absent'}">
                                ${status === 'present' ? '✓ Presente' : '✗ Ausente'}
                            </span>
                            <button class="btn-small btn-reset" onclick="markAttendance('${alumno.matricula}', null)">
                                ↻
                            </button>
                        `}
                        <button class="btn-small btn-report" onclick="openReportModal('${alumno.matricula}')">
                            📝 Reporte
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('presentCount').textContent = presentCount;
        document.getElementById('absentCount').textContent = absentCount;
    }

    // FILTRAR ESTUDIANTES
    function filterStudents() {
        renderAttendanceList();
    }

    // MODAL DE REPORTES
    function openReportModal(matricula) {
        reportMatricula = matricula;
        const alumno = grupoAlumnos.find(a => a.matricula === matricula);
        document.getElementById('reportStudentName').textContent = `Alumno: ${alumno.nombre}`;
        document.getElementById('reportModal').classList.add('active');
    }

    function closeReportModal() {
        reportMatricula = null;
        document.getElementById('reportModal').classList.remove('active');
        document.getElementById('reportType').value = 'Conducta';
        document.getElementById('reportDescription').value = '';
    }

    function saveReport() {
        const tipo = document.getElementById('reportType').value;
        const descripcion = document.getElementById('reportDescription').value.trim();

        if (!descripcion) {
            alert('Por favor ingresa una descripción del reporte');
            return;
        }

        const fecha = new Date().toLocaleDateString('es-MX', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        if (!reportes[reportMatricula]) {
            reportes[reportMatricula] = [];
        }

        reportes[reportMatricula].push({
            tipo: tipo,
            descripcion: descripcion,
            fecha: fecha,
            grupo: currentGroup.name
        });

        saveData();
        alert('Reporte guardado exitosamente');
        closeReportModal();
    }