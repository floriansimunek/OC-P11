import styles from "./LeaseInformations.module.scss";
import TagsList from "../TagsList";
import StarsList from "../StarsList";
import DropDownsList from "../DropDownsList";

export default function LeaseInformations({ lease, TAGS, DROP_DOWNS }) {
	return (
		<>
			<div className={styles.informations}>
				<div className={styles.left}>
					<div className={styles.top}>
						<h1 className={styles.title}>{lease.title}</h1>
						<h2 className={styles.location}>{lease.location}</h2>
					</div>
					<div className={styles.bot}>
						<TagsList tags={TAGS} />
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<p className={styles.owner}>{lease.host.name}</p>
						<img src={lease.host.picture} className={styles.profilePicture}></img>
					</div>
					<div className={styles.bot}>
						<StarsList stars={lease.rating} />
					</div>
				</div>
			</div>
			<DropDownsList DropDowns={DROP_DOWNS} type={"row"} />
		</>
	);
}
