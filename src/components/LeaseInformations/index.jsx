import styles from "./LeaseInformations.module.scss";
import TagsList from "../TagsList";
import StarsList from "../StarsList";
import DropDownsList from "../DropDownsList";

export default function LeaseInformations({ title, location, owner, TAGS, DROP_DOWNS }) {
	return (
		<>
			<div className={styles.informations}>
				<div className={styles.left}>
					<div className={styles.top}>
						<h1 className={styles.title}>{title}</h1>
						<h2 className={styles.location}>{location}</h2>
					</div>
					<div className={styles.bot}>
						<TagsList tags={TAGS} />
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<p className={styles.owner}>{owner}</p>
						<div className={styles.profilePicture}></div>
					</div>
					<div className={styles.bot}>
						<StarsList stars={3} />
					</div>
				</div>
			</div>
			<DropDownsList DropDowns={DROP_DOWNS} type={"row"} />
		</>
	);
}
