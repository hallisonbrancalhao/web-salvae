import "./styles.scss";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard/cadastro-restaurante">
            Cadastro Restaurante
          </Link>
        </li>
        <li>
          <Link href="/dashboard/cadastro-patrocinadores">
            Cadastro Patrocinadores
          </Link>
        </li>
      </ul>
    </div>
  );
}
