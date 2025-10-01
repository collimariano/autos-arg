# 🚗 Autos Market (MVP)

Marketplace de autos usados y 0 km en Argentina.  
Construido con **Next.js 15**, **React 19**, **Mantine UI**, **Prisma** y **PostgreSQL**.

---

## 📦 Tech stack
- [Next.js](https://nextjs.org/) 15 (App Router, React 19)
- [Mantine](https://mantine.dev/) para UI
- [Prisma](https://www.prisma.io/) como ORM
- [PostgreSQL](https://www.postgresql.org/) como base de datos
- [DBeaver](https://dbeaver.io/) para inspección de la DB (opcional)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Requisitos previos
- Node.js >= 18
- PostgreSQL >= 14
- pnpm / npm / yarn (recomendado: `pnpm`)

---

## 🚀 Instalación

Clonar el repo:

```bash
git clone https://github.com/collimariano/autos-arg.git
cd autos-arg
🗄️ Configuración de la DB

Crear usuario y DB en Postgres (si no existen):

CREATE ROLE marianocolli LOGIN PASSWORD 'tu_password';
CREATE DATABASE autos_arg OWNER marianocolli;


Configurar .env en la raíz:

DATABASE_URL="postgresql://marianocolli:tu_password@localhost:5432/autos_arg"


Migraciones:

npx prisma migrate dev --name init


(Opcional) Ver los datos con Prisma Studio:

npx prisma studio