import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link href="/role/admin/dashboard">
            <button>Dashboard</button>
          </Link>
        </li>
        <li>
          <Link href="/role/admin/addDoctor">
            <button>Add Doctor</button>
          </Link>
        </li>
        <li>
          <Link href="/role/admin/seedoctorlist">
            <button>See Doctors List</button>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <button>Log out</button>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #333;
        }
        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
        }
        li {
          margin-right: 20px;
        }
        .nav-button {
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border: 1px solid white;
          border-radius: 5px;
        }
        .nav-button:hover {
          background-color: white;
          color: #333;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
