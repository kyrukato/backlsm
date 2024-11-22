import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ValidRoles } from "../interface/valid-roles";
import { RoleProtected } from "./role-protected.decorator";
import { UserRoleGuard } from "../guards/user-role/user-role.guard";

export function Auth(...rol: ValidRoles[]){
    return applyDecorators(
        RoleProtected(...rol),
        UseGuards(AuthGuard(),UserRoleGuard),

    );
}