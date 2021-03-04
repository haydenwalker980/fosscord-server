import { Schema, model, Types, Document } from "mongoose";
import db from "../util/Database";

export interface Role {
	id: bigint;
	guild_id: bigint;
	color: number;
	hoist: boolean;
	managed: boolean;
	mentionable: boolean;
	name: string;
	permissions: bigint;
	position: number;
	tags?: {
		bot_id?: bigint;
	};
}

export interface RoleDocument extends Document, Role {
	id: bigint;
}

export const RoleSchema = new Schema({
	id: Types.Long,
	guild_id: Types.Long,
	color: Number,
	hoist: Boolean,
	managed: Boolean,
	mentionable: Boolean,
	name: String,
	permissions: Types.Long,
	position: Number,
	tags: {
		bot_id: Types.Long,
	},
});

// @ts-ignore
export const RoleModel = db.model<RoleDocument>("Role", RoleSchema, "roles");