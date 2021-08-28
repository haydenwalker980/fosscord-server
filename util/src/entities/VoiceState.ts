import { Column, Entity, JoinColumn, ManyToOne, OneToOne, RelationId } from "typeorm";
import { BaseClass } from "./BaseClass";
import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { User } from "./User";

@Entity("voice_states")
export class VoiceState extends BaseClass {
	@RelationId((voice_state: VoiceState) => voice_state.guild)
	guild_id: string;

	@JoinColumn({ name: "guild_id" })
	@ManyToOne(() => Guild, (guild: Guild) => guild.id)
	guild?: Guild;

	@RelationId((voice_state: VoiceState) => voice_state.channel)
	channel_id: string;

	@JoinColumn({ name: "channel_id" })
	@ManyToOne(() => Channel, (channel: Channel) => channel.id)
	channel: Channel;

	@RelationId((voice_state: VoiceState) => voice_state.user)
	user_id: string;

	@JoinColumn({ name: "user_id" })
	@ManyToOne(() => User, (user: User) => user.id)
	user: User;

	@Column()
	session_id: string;

	@Column()
	deaf: boolean;

	@Column()
	mute: boolean;

	@Column()
	self_deaf: boolean;

	@Column()
	self_mute: boolean;

	@Column({ nullable: true })
	self_stream?: boolean;

	@Column()
	self_video: boolean;

	@Column()
	suppress: boolean; // whether this user is muted by the current user
}
